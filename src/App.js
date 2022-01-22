import React from 'react';
import { ConfigProvider } from "antd";
import MainLayout from './layouts/mainLayout';

function App() {
	return (
		<ConfigProvider>
			<MainLayout />
		</ConfigProvider >
	);
}

export default App;
