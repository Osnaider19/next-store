import { PaypalClientId, PaypalSecretId } from "@/config/config";
import { type UnitsItems, Products } from "@/types/types";
import paypal from "@paypal/checkout-server-sdk";
import { NextResponse, NextRequest } from "next/server";

const environment = new paypal.core.SandboxEnvironment(
  PaypalClientId,
  PaypalSecretId
);

type Data = {
  cart: Products[];
  total: number;
};

const client = new paypal.core.PayPalHttpClient(environment); //app

export async function POST(req: NextRequest) {
  const request = new paypal.orders.OrdersCreateRequest();
  const data: Data = await req.json();
  console.log(data);
  const { cart, total } = data;

  const purchaseUnitsItems: UnitsItems[] = []; //products a cobrar;
  cart.forEach((product) => {
    purchaseUnitsItems.push({
      name: product.title, // Nombre del producto
      quantity: `${product.amount?.toString()}`, // Cantidad del producto
      description: product.title, // Descripción del producto
      category: "DIGITAL_GOODS", // Categoría del producto
      unit_amount: {
        currency_code: "USD",
        value: `${product.price.toString()}`, // Precio unitario del producto
      },
    });
    console.log(purchaseUnitsItems);
  });
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: total.toString(),
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: total.toString(),
            },
          },
        },
        items: purchaseUnitsItems,
      },
    ],
  });
  const response = await client.execute(request);

  return NextResponse.json({
    id: response.result.id,
  });
}
