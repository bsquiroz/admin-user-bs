import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { routerAdmin } from "./router/router";
import { plugin, defaultConfig } from "@formkit/vue";
import { config } from "./lib/form/formkit.config";

const app = createApp(App);

app.use(plugin, defaultConfig(config));
app.use(routerAdmin);
app.mount("#app");
