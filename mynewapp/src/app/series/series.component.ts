import { Component, OnInit } from '@angular/core';
import { Serie } from './series';
import { dataSeries } from './data';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];
  selectedSerie: Serie | null = null;

  constructor() {}

  ngOnInit() {
    this.series = dataSeries;
  }

  showDetails(serie: Serie): void {
    this.selectedSerie = serie;
  }

  closeModal(): void {
    this.selectedSerie = null;
  }

  calculateAverageSeasons(): number {
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    return parseFloat((totalSeasons / this.series.length).toFixed(2));
  }
}

