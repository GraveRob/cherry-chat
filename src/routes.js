import LoginForm from "./components/LoginForm";
import ChatSection from "./components/ChatSection";
import { LOGIN_ROUTE, CHAT_ROUTE } from "./consts";

export const publicRoutes = [
    {
    path: LOGIN_ROUTE,
    Component: LoginForm,
    }
];

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: ChatSection, 
    }
];