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
  isValidStartDate: boolean = true;
  isValidEstimate: boolean = true;
  submit(startDate: string, estimateDays: string) {
    if (this.formValidation(startDate, estimateDays)) {
      this.getCompletionDate(startDate, estimateDays);
      this.clear();
    }
  }
  formValidation(startDate: string, estimateDays: string) {
    this.isValidStartDate = true;
    this.isValidEstimate = true;
    if (!startDate) return (this.isValidStartDate = false);
    else if (!estimateDays) return (this.isValidEstimate = false);

    return true;
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
