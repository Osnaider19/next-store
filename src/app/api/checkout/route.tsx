import { PaypalClientId, PaypalSecretId } from "@/config/config";
import { type UnitsItems, Products } from "@/types/types";
import paypal from "@paypal/checkout-server-sdk";
import { NextResponse, NextRequest } from "next/server";

const environment = new paypal.core.SandboxEnvironment(
  PaypalClientId!,
  PaypalSecretId!
);

type Data = {
  cart: Products[];
  total: number;
};

const client = new paypal.core.PayPalHttpClient(environment); //app

export async function POST(req: NextRequest) {

  const request = new paypal.orders.OrdersCreateRequest(); //creamos la orden
  const data: Data = await req.json(); //transformamos la req a un formato json
  
  const { cart, total } = data; //extraemos los datos de los productos a comprar

  const purchaseUnitsItems: UnitsItems[] = []; //creamos un arry donde van a estar los productos ya mutados con sus repectivos campo como los necesita paypal 

  cart.forEach((product) => { //recorremos el arry de productos y por cada producto hacemos un push a purchaseUnitsItems 
    purchaseUnitsItems.push({
      name: product.title, // Nombre del producto
      quantity: product.amount ? product.amount.toString() : "1", //cantidad del producto
      description: product.title, // Descripción del producto
      category: "DIGITAL_GOODS", // Categoría del producto
      unit_amount: {
        currency_code: "USD",
        value: product.price.toString(), // Precio unitario del producto
      },
    });
  });

  //llenamos la request con sus respentivos campos como los necesita paypal
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
            discount: { currency_code: "USD", value: "0" },
            handling: { currency_code: "USD", value: "0" },
            insurance: { currency_code: "USD", value: "0" },
            shipping_discount: { currency_code: "USD", value: "0" },
            shipping: { currency_code: "USD", value: "0" },
            tax_total: { currency_code: "USD", value: "0" },
          },
        },
        items: purchaseUnitsItems, // los productos ya mutados con sus nuevo campos
      },
    ],
  });

  const response = await client.execute(request); //ejecutamos la request 
  return NextResponse.json({
    id: response.result.id, //respondemos con el id de la orden 
  });
}
