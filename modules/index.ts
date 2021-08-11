import { RequestContext } from "@zuplo/runtime";

export default async function (context: RequestContext) {
  const result = await fetch(new URL(context.path, "https://jsonplaceholder.typicode.com/").toString());  
  // const text = await result.text(); // remove this line it works 
  // context.logger.info(`Response length: ${text.length}`);
  // const response = new Response(text, result);
  return result;
}