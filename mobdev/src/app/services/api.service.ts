import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://www.breakingbadapi.com/api/episodes');
    }

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }

    getCharacters() {
        return this.http.get('https://www.breakingbadapi.com/api/characters');
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }

    getQuotes() {
        return this.http.get('https://www.breakingbadapi.com/api/quotes');
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }

    getSearchQuote(name) {
        return this.http.get(`https://www.breakingbadapi.com/api/quote?author=${name}`);
    }

    getDeaths() {
        return this.http.get('https://www.breakingbadapi.com/api/deaths');
    }

    getDeath(name: string) {
        return this.http.get('https://www.breakingbadapi.com/api/death-count?name=${name}');
    }

    getSearchDeath(name) {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${name}`);
    }

    

}
