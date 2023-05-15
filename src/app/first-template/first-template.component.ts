import { ChangeDetectorRef, Component , ElementRef, ViewChild } from '@angular/core';
import { UserDataService } from '../user-data.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';
@Component({
  selector: 'app-first-template',
  templateUrl: './first-template.component.html',
  styleUrls: ['./first-template.component.css']
})
export class FirstTemplateComponent {
  name : string ='';
  job:string='';
  adress:string='';
  email:string='';
  websitelink:string='';
  phonenumber:string='';
  image='';
  Bio:string='';
  /**
   *
   */
  constructor(public CvData : UserDataService ) {
    
    
  }
  @ViewChild('template') template!: ElementRef;
  downloadPDF() {
  const pdf = new jsPDF('p', 'pt', [595, 842]);
  const content = this.template.nativeElement;

  html2canvas(content).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth() - 10;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    const margin = 5; // 5mm margin on each side
    const x = margin;
    const y = margin;
    const width = pdfWidth - (margin * 2);
    const height = pdfHeight - (margin * 2);
    pdf.addImage(imgData, 'PNG', x, y, width, height);
    pdf.save('cv.pdf');
  });
}

print() {
  const content = this.template.nativeElement;
  html2canvas(content, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const doc = new jsPDF();
    doc.addImage(imgData, 'PNG', 0, 0, 210, 297);
    doc.autoPrint();
    window.open(doc.output('bloburl'), '_blank');
  });
}
downloadWord() {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun(`Name: ${this.CvData.name}`)
          ]
        }),
        new Paragraph({
          children: [
            new TextRun(`Email: ${this.CvData.Experience}`)
          ]
        }),
        new Paragraph({
          children: [
            new TextRun(`Phone: ${this.CvData.skills}`)
          ]
        }),
        new Paragraph({
          children: [
            new TextRun(`Experience: ${this.CvData.phonenumber}`)
          ]
        }),
       
      ]
    }]
  });

  // Save the document as a .docx file
  Packer.toBlob(doc).then(blob => {
    saveAs(blob, "example.docx");
  });
}
downloadPNG() {
  const content = this.template.nativeElement;

  html2canvas(content).then(canvas => {
    const imgData = canvas.toDataURL('image/png');

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'cv.png';

    // Trigger a click event on the link to download the PNG image
    link.click();
  });
}



}
