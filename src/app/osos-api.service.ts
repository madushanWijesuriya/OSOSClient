import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class OSOSApiService {
  constructor() {}
  getEstimatedCompletionDate(startDate: string, estimateDays: string) {
    return axios.get(
      'https://localhost:44368/api/Tasks/getCompletionDate?startDate=' +
        startDate +
        '&estimateDate=' +
        estimateDays,
      {}
    );
  }
}
