import { Component, OnInit, Input } from '@angular/core';
//import { NameSeterService } from '../name-seter.service';

@Component({
  selector: 'app-name-seter',
  templateUrl: './name-seter.component.html',
  styleUrls: ['./name-seter.component.css'],
})
export class NameSeterComponent implements OnInit {
  helloHtmlElement;
  name = '';
  ngDropdownIndex = 0;
  actualFont = '';
  fonts = [
    'Arial',
    'Verdana',
    'Tahoma',
    'Trebuchet MS',
    'Times New Roman',
    'Georgia',
    'Garamond',
    'Courier New',
  ];
  fontSizeError = '';
  fontSize = '';
  align = '';

  constructor() {}

  ngOnInit() {
    this.helloHtmlElement = document.getElementById('hello');
    this.align = 'left';
    this.setFontFamily(0);
    this.alignHelloBlock(this.align);
  }

  setName(value) {
    //console.log(value);
    this.name = value.toUpperCase();
  }

  setFontFamily(value) {
    ///*console.log(value);
    this.actualFont = this.fonts[value];

    this.helloHtmlElement.style.fontFamily = this.actualFont;
  }

  setFonSize(value) {
    if (isNaN(value)) {
      this.fontSizeError = 'La taille doit être en chiffres';
    } else {
      this.fontSizeError = '';
      this.helloHtmlElement.querySelector('h1').style.fontSize = `${value}px`;
    }
  }

  alignHelloBlock(value) {
    this.helloHtmlElement.style.textAlign = `${value}`;
    //console.log(value);
  }
}
