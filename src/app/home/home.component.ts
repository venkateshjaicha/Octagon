

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

  
  public RejectDirName: any[] = ['ascend', 'ascend_lite', 
                                'atg','s99grp','sbcs'];
  public OutputDirName: any[] = ['ascend', 'ascend_lite', 
                                'atg','s99grp','sbcs'];  

  public winbeforeappln:any[]=['1','2','3','4','5','6','7','8','9','10','11','12'];
  public winafterappln:any[]=['1','2','3','4','5','6','7','8','9','10','11','12'];
  public performancewin:any[]=['1','2','3','4','5','6','7','8','9','10','11','12'];
  public badefinition:any[]=['0 DPD','0-30 DPD','31-60 DPD','61-90 DPD','90+ DPD (BK, CO)'];




   public proxy: any[] = ['Unsecured', 'secured', 
                                'Auto Loan','Mortage','Home Equity','Credit Union','Mtf Loan','Student Loan'];                                
   Rejectid:any='ascend'; 
   Outputid:any='ascend';  
   prxy1:any='Unsecured';
   prxy2:any='secured'; 
   AdvRejectId:any='';  
   advsaved:boolean=false;                                                     
                          
  @ViewChild('div') div: ElementRef;



  constructor(private formBuilder: FormBuilder,private renderer: Renderer2,private toastr: ToastrService,private modalService: NgbModal) {}

  ngOnInit() {
   
  }

   addElement() {
    const div: HTMLParagraphElement = this.renderer.createElement('p');
    div.innerHTML = "<select id='reject-select' class='form-control inpt-cmn'  [(ngModel)]='Rejectid' ><option *ngFor='let rejedir of RejectDirName' [value]='rejedir'>{{rejedir}}</option></select>"
    this.renderer.appendChild(this.div.nativeElement, div);
  }

  AdvancedSetting(content:any) {
this.modalService.open(content, {backdrop: 'static',keyboard: false,ariaLabelledBy: 'modal-basic-title',windowClass : "AdvcnModal"}).result.then((result) => {
this.closeResult = `Closed with: ${result}`;
}, (reason) => {
//this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
});
}

closemodal()
{
  this.modalService.dismissAll();
  if(this.advsaved ==false)
  {
  this.AdvRejectId='';
  }

}

savemodal()
{
  this.modalService.dismissAll();
  this.advsaved=true;
  this.toastr.success('Settings saved successfully!', 'Advanced settings');

}

}
