// src/server.js
import { createServer } from "miragejs";
import { data } from "./data";

const employees = data;
const teams = [];
data.forEach(employee => {
  const ids = teams.map(team => team.id);
  if (ids.includes(employee.team.id)) {
    return;
  }
  teams.push(employee.team);
});

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/employees", () => {
        return employees;
      });

      this.get("/teams", () => {
        return teams;
      });
    },
  });

  return server;
}
