import { AfterViewInit,Component,EventEmitter,Input,OnInit,Output,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Employee,ServerData} from 'src/app/types/Employee';
import { EmployeesService } from './services/employee.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {
 data: ServerData |undefined;
 currentElement: Employee | undefined;
 url="";
dataSource:MatTableDataSource<Employee>;
displayColumns: string[]=["id","birthDate","firstName","lastName","gender","hireDate","cancella","edit"];

constructor(private employeeService:EmployeesService){
    this.dataSource=new MatTableDataSource();
    this.loadData("http://localhost:8080/employees");
}
ngOnInit():void{
}

loadData(url:string){
   this.url=url;
    this.employeeService.getData(url).subscribe(
        (serverResponse: any) =>{
            this.data=serverResponse;
            
            this.dataSource = new MatTableDataSource(this.data?._embedded?.employees);
        }
    )
  }

 nextPage(){
    if(this.data)this.loadData(this.data._links.next.href)
 }
 prevPage(){
    if(this.data)this.loadData(this.data._links.prev.href)
 }
 firstPage(){
    if(this.data)this.loadData(this.data._links.first.href)
 }
 lastPage(){
    if(this.data)this.loadData(this.data._links.last.href)
 }
 cancella(element: Employee){
   this.employeeService.deleteRow("http://localhost:8080/employees/"+ element.id).subscribe( 
       (serverData) =>{ this.loadData(this.url)},
       (error) => {
           console.log(error)
       }
   )

 }
 modifica(element: Employee){

  }
 }
  

  

