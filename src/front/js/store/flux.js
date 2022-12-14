const API_URL = "https://www.swapi.tech/api";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      vehicles: [],
      planets: [],
      singleItem: {},
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getItems: async (resources) => {
        try {
          const response = await fetch(`${API_URL}/${resources}`);
          const body = await response.json();
          if (response.status !== 200) {
            alert("No cargaron los items");
            return;
          }
          setStore({
            [`${resources}`]: body.results,
          });
        } catch (error) {
          alert("algo paso");
          console.log(error);
        }
      },

      getsingleItem: async (resource, uid) => {
        try {
          const response = await fetch(`${API_URL}/${resource}/${uid}`);
          const body = await response.json();
          if (response.status !== 200) {
            alert("no cargo el personaje");
            return;
          }
          setStore({
            singleItem: {
              ...body.result.properties,
              uid: body.result.uid,
              description: body.result.description,
            },
          });
        } catch (error) {
          alert("algo malo paso");
          console.log(error);
        }
      },

      signUp: async (requestBody) => {
        const response = await fetch(`${process.env.BACKEND_URL}/api/user`, {
          method: "POST",
          body: JSON.stringify(requestBody),
          body: {},
          headers: {
            "Content-Type": "application/json",
          },
        });
        return response.status === 201;
      },

      login: async (requestBody) => {
        // Cambiado
        const response = await fetch(`${process.env.BACKEND_URL}/api/token`, {
          method: "POST",
          body: {},
          body: JSON.stringify(requestBody),
          headers: {
            "Content-type": "application/json",
          },
        });
        if (!response.ok) throw Error("Hubo un problema con el login");
        if (response.status === 401) {
          throw "clave o usario incorrecto";
        } else if (response.status === 400) {
          throw "revise el payload de su solicitud...";
        }
        const data = await response.json();
        localStorage.setItem("jwt-token", data.token);
        return true;
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
