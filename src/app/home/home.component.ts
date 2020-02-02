import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormArray
} from '@angular/forms';
import { NgbDateStruct, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatRadioChange } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public basemonthval: any[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  public baseyearval: any[] = [
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
    '2031',
    '2032',
    '2033',
    '2034'
  ];

  BaseMonth: any = '01';
  BaseYear: any = '2019';

  req_base_month: boolean = false;
  req_base_year: boolean = false;
  req_start_date: boolean = false;
  req_end_date: boolean = false;
  anArrays: any = [];
  company: any = [];
  Subscriberid: any = [];
  Portfolio: any = [];

  StartDate: NgbDateStruct;
  EndDate: NgbDateStruct;

  requiredall: boolean = true;

  count: number = 2;
  @ViewChild('div') div: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private homeservice: HomeService,
    private renderer: Renderer2,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}

  onChange(event: any) {
    if (event != '') {
      this.requiredall = false;
    } else {
      this.requiredall = true;
    }
  }

  Addproxy() {
    this.count = this.count + 1;

    this.anArrays.push(this.anArrays[this.count]);
  }

  Removeproxys(i: any) {
    this.count = this.count - 1;
    this.anArrays.splice(i, 1);
  }
  Submit() {
    if (this.BaseMonth != '') {
      this.req_base_month = false;
    } else {
      this.req_base_month = true;
    }
    if (this.BaseYear != '') {
      this.req_base_year = false;
    } else {
      this.req_base_year = true;
    }
    if (this.StartDate) {
      this.req_start_date = false;
    } else {
      this.req_start_date = true;
    }
    if (this.EndDate) {
      this.req_end_date = false;
    } else {
      this.req_end_date = true;
    }

    var compnayobj = {};
    var subcriberobj = {};
    var portfilioobj = {};

    for (var i = 0; i < this.anArrays.length; i++) {
      compnayobj['company' + (i + 1)] = this.company[i];
      subcriberobj['subcriberid' + (i + 1)] = this.Subscriberid[i];
      portfilioobj['portfilioid' + (i + 1)] = this.Portfolio[i];
    }

    if (this.StartDate && this.EndDate && this.BaseMonth && this.BaseYear) {
      let data: any = {
        start_date: this.StartDate,
        end_date: this.EndDate,
        base_month: this.BaseMonth,
        base_year: this.BaseYear,
        company: compnayobj,
        subcriberid: subcriberobj,
        portfilioid: portfilioobj
      };
      console.log(data);
      this.homeservice.GenerateQuery(data).subscribe((apiresponse: any) => {
        if (apiresponse.query == 'Success') {
          this.toastr.success('Data Saved Successfully !', 'Success');
        } else {
        }
      });
    } else {
      this.toastr.error('Please Fill out all fields!', 'Warning');
    }
  }
}
