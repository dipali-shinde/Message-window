import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildComponent } from "./parent/child/child.component";
import { ParentComponent } from "./parent/parent.component";

const routes: Routes = [
    {path : '',redirectTo:'/parent',pathMatch:'full'},
    { path: 'parent', component: ParentComponent ,children :[
        { path :'child',component : ChildComponent}
    ] },
    
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  