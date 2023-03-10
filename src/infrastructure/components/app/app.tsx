import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';
import './app.css';

export function App() {
    return (
        <>
            <div className="App">
                <Layout>
                    <AppRoutes></AppRoutes>
                </Layout>
            </div>
        </>
    );
}
