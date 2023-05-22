import { Component, Inject } from '@angular/core';
import { OSOSApiService } from '../osos-api.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  constructor(@Inject(OSOSApiService) private apiService: OSOSApiService) {}
  startDate: string = '';
  estimateDays: number = 0;
  completionDate: string = '';
  submit(startDate: string, estimateDays: string) {
    this.getCompletionDate(startDate, estimateDays);
    this.clear();
  }
  formValidation(startDate: string, estimateDays: string) {
    if (!startDate) return;
  }
  getCompletionDate(startDate: string, estimateDays: string) {
    this.apiService
      .getEstimatedCompletionDate(startDate, estimateDays)
      .then((response: any) => {
        let completeDate: Date = new Date(response.data);
        this.completionDate = completeDate.toLocaleString();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  clear() {
    this.startDate = '';
    this.estimateDays = 0;
  }
}
