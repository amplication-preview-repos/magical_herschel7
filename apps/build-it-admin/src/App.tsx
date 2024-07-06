import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CarModelList } from "./carModel/CarModelList";
import { CarModelCreate } from "./carModel/CarModelCreate";
import { CarModelEdit } from "./carModel/CarModelEdit";
import { CarModelShow } from "./carModel/CarModelShow";
import { PartList } from "./part/PartList";
import { PartCreate } from "./part/PartCreate";
import { PartEdit } from "./part/PartEdit";
import { PartShow } from "./part/PartShow";
import { ModificationList } from "./modification/ModificationList";
import { ModificationCreate } from "./modification/ModificationCreate";
import { ModificationEdit } from "./modification/ModificationEdit";
import { ModificationShow } from "./modification/ModificationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BuildIt"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CarModel"
          list={CarModelList}
          edit={CarModelEdit}
          create={CarModelCreate}
          show={CarModelShow}
        />
        <Resource
          name="Part"
          list={PartList}
          edit={PartEdit}
          create={PartCreate}
          show={PartShow}
        />
        <Resource
          name="Modification"
          list={ModificationList}
          edit={ModificationEdit}
          create={ModificationCreate}
          show={ModificationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
