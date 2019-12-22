import { Component, OnInit,Renderer2,ViewChild,ElementRef } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormBuilder,FormGroup, FormControl, FormsModule, ReactiveFormsModule ,Validators, FormArray  } from '@angular/forms';
import {NgbDateStruct, NgbCalendar ,NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MatRadioChange } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    closeResult: string;

    proxyButton:any = false;

    public RejectDirName: any[] = ['ascend', 'ascend_lite',
        'atg', 's99grp', 'sbcs'
    ];
    public OutputDirName: any[] = ['ascend', 'ascend_lite',
        'atg', 's99grp', 'sbcs'
    ];

    public winbeforeappln: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    public winafterappln: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    public performancewin: any[] = ['6','12','18','24'];
    public badefinition: any[] = ['0 DPD', '0-30 DPD', '31-60 DPD', '61-90 DPD', '90+ DPD (BK, CO)'];




    public proxy: any[] = ['Unsecured', 'secured',
        'Auto Loan', 'Mortage', 'Home Equity', 'Credit Union', 'Mtf Loan', 'Student Loan'
    ];


    /*GENERAL*/
    Rejectid: any = 'ascend';
    Outputid: any = 'ascend';
    RejectTableName: any = '';
    OutputTableName: any = '';
    req_reject_tablename: boolean = false;
    req_output_tablename: boolean = false;
    req_base_month: boolean = false;
    req_start_date: boolean = false;
    req_end_date: boolean = false;
    anArrays:any=['Unsecured','secured'];



    StartDate: NgbDateStruct;
    EndDate: NgbDateStruct;


    BaseMonth: any = '';
    prxy1: any = 'Unsecured';
    prxy2: any = 'secured';


    /*Advance Settings*/
    AdvRejectId: any = '';
    AdvRejectDate: any = '';
    AdvPublicrec: any = '1';
    AdvCollectionrec: any = '1';
    AdvHostName: any = '';
    AdvWinBefore: any = '';
    AdvWinAfter: any = '';
    FilteredStartdt: any = '';
    FilteredEnddt: any = '';
    AdvPerformanceval: any = '';
    AdvBadefinition: any = '';
    advsaved: boolean = false;
    requiredall: boolean = true;
    count :number=2;

    @ViewChild('div') div: ElementRef;



    constructor(private formBuilder: FormBuilder, private homeservice: HomeService, private renderer: Renderer2, private toastr: ToastrService, private modalService: NgbModal) {}

    ngOnInit() {

    }

    onChange(event: any) {
        console.log(event.item1.value);
        if (event != '') {
            this.requiredall = false;
        } else {
            this.requiredall = true;

        }
    }

    addElement() {
        const div: HTMLParagraphElement = this.renderer.createElement('p');
        div.innerHTML = "<select id='reject-select' class='form-control inpt-cmn'  [(ngModel)]='Rejectid' ><option *ngFor='let rejedir of RejectDirName' [value]='rejedir'>{{rejedir}}</option></select>"
        this.renderer.appendChild(this.div.nativeElement, div);
    }

    AdvancedSetting(content: any) {
        this.modalService.open(content, {
            backdrop: 'static',
            keyboard: false,
            ariaLabelledBy: 'modal-basic-title',
            windowClass: "AdvcnModal"
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    closemodal() {
        this.modalService.dismissAll();
        if (this.advsaved == false) {
            this.AdvRejectId = '';
        }

    }

    savemodal() {
        this.modalService.dismissAll();
        this.advsaved = true;
        this.toastr.success('Settings saved successfully!', 'Advanced settings');

    }
    radiopublicChange(event: any) {
        console.log(this.AdvPublicrec);

    }
    radiocollectionChange(event: any) {
        console.log(this.AdvCollectionrec);

    }


   Addproxy(){

        this.count = this.count + 1;

        if(this.count == 3){
           this.anArrays.push('Auto Loan');
        }
        else if(this.count == 4){
           this.anArrays.push('Mortage');
        }
        else if(this.count == 5){
           this.anArrays.push('Home Equity');
        }
        else if(this.count == 6){
           this.anArrays.push('Credit Union');
        }
          else if(this.count == 7){
           this.anArrays.push('Mtf Loan');
        }
       else if(this.count == 8){
           this.anArrays.push('Student Loan');
        }
       

        if(this.count == 8){
          this.proxyButton = true;
        }
        else{
          this.proxyButton = false;
        }
   }

OnSelectchange(index:any){
  
for(let i = 0;i<this.anArrays.length;i++){
  if(i != index){
  if(this.anArrays[index] == this.anArrays[i]){
    this.anArrays[i] = ''
    return
  }
}
}
}
    Removeproxys(i:any) {
      console.log(i);
        this.count = this.count - 1;
        this.anArrays.splice(i, 1);
        if(this.count == 8){
          this.proxyButton = true;
        }
        else{
          this.proxyButton = false;
        }
       }
    Submit() {

        if (this.RejectTableName != '') {
            this.req_reject_tablename = false;
        } else {
            this.req_reject_tablename = true;
        }

        if (this.OutputTableName != '') {
            this.req_output_tablename = false;
        } else {
            this.req_output_tablename = true;
        }
        if (this.BaseMonth != '') {
            this.req_base_month = false;
        } else {
            this.req_base_month = true;
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


        if (this.StartDate) {
            this.FilteredStartdt = this.StartDate.year + '-' + this.StartDate.month + '-' + this.StartDate.day;
        }

        if (this.EndDate) {
            this.FilteredEnddt = this.EndDate.year + '-' + this.EndDate.month + '-' + this.EndDate.day;
        }
        var proxyobj = {};
       for (var i = 0 ; i < this.anArrays.length; i++) {
      proxyobj["proxy" + (i+1)] = this.anArrays[i];
          }

        //console.log(proxyobj);

        if (this.RejectTableName && this.OutputTableName && this.StartDate && this.EndDate && this.BaseMonth) {
            let data: any = {
                reject_table_name: this.RejectTableName,
                reject_directory_col: this.Rejectid,
                output_table_name: this.OutputTableName,
                output_directory_name: this.Outputid,
                start_date: this.FilteredStartdt,
                end_date: this.FilteredEnddt,
                base_month: this.BaseMonth,
                proxy:proxyobj,
                adv_reject_unique_id:this.AdvRejectId,
                adv_reject_date_col:this.AdvRejectDate,
                adv_public_rec:this.AdvPublicrec,
                adv_collection_rec:this.AdvCollectionrec,
                adv_host_name:this.AdvHostName,
                adv_before_appln:this.AdvWinBefore,
                adv_after_appln:this.AdvWinAfter,
                adv_performance_win:this.AdvPerformanceval,
                adv_bad_def:this.AdvBadefinition,
            }
                        console.log(data);
            this.homeservice.GenerateQuery(data).subscribe((apiresponse: any) => {
                if (apiresponse.query == "Success") {
                    this.toastr.success('Data Saved Successfully !', 'Success');
                } else {}

            })

        } else {
            this.toastr.error('Please Fill out all fields!', 'Warning');

        }
    }
}