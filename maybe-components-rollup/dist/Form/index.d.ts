import InternalForm from "./Form";
import Item from "./Item";
type InternalFormType = typeof InternalForm;
interface FormInterface extends InternalFormType {
    Item: typeof Item;
}
declare const Form: FormInterface;
export default Form;
