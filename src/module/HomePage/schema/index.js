import { schema } from "normalizr";

const BusinesssSchema = new schema.Entity("businesses");
const BusinessArraySchema = new schema.Array(BusinesssSchema);

export { BusinesssSchema, BusinessArraySchema };