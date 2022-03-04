import { Provider } from "react-redux";
import store from "./reducers/Store";
import Routing from "./routes/Routing";
export default function Main() {
	return (
		<Provider store={store}>
			<Routing />
		</Provider>
	);
}
