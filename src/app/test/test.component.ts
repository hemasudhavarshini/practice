import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TestService } from 'src/Services/test.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  content: SafeHtml | undefined;

  constructor(
    private externalContentService: TestService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const url = 'http://192.168.32.242:8080/superset/dashboard/11/';

    this.externalContentService.getContent(url).subscribe(
      (response) => {
        // Sanitize the HTML content to prevent XSS attacks
        this.content = this.sanitizer.bypassSecurityTrustHtml(response);
      },
      (error) => {
        console.error('Failed to fetch external content:', error);
      }
    );
  }
}
