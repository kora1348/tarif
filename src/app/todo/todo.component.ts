import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { PlnPlcInfo } from './types/tarification-titre.response';




@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tarificationTitre: PlnPlcInfo[] = [];
  placeFilter: string = '';
  planFilter: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.tarificationTitre = this.todoService.PLN_PLC;
  }

  filterByPlace() {
    if (this.placeFilter) {
      this.tarificationTitre = this.todoService.PLN_PLC.filter(item => {
        return item.PLACECODE.toString() === this.placeFilter;
      });
    } else {
      this.tarificationTitre = this.todoService.PLN_PLC;
    }
  }


  filterByPlan() {
    if (this.planFilter) {
      this.tarificationTitre = JSON.parse(JSON.stringify( this.todoService.PLN_PLC)).filter((item:any) => {
        return item.PLN_SVM.some((svm:any) => {
          return svm.PLN.some(
            (plan:any) => plan.PLAN === parseInt(this.planFilter)
          );
        });
      }).map((item:any) => {
        item.PLN_SVM = item.PLN_SVM.filter((svm:any) => {
          return svm.PLN.some(
            (plan:any) => plan.PLAN === parseInt(this.planFilter)
          );
        });
        return item;
      });
    } else {
      this.tarificationTitre = this.todoService.PLN_PLC;
    }
  
  
  }
  
}
