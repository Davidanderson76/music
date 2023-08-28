import { Component, OnInit } from '@angular/core';
import { Beat } from '../../models/music.model';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent implements OnInit {
  beatNumber: number = 0;
  songs: Beat[] = [
    {
      name: 'BEAT #1',
      bpm: 162,
      key: 'E Minor',
      wav: '../../../assets/beats/bouy 145bpm Gminor.wav',
      art: '../../../assets/albumArt/charlesdeluvio-pcZvxrAyYoQ-unsplash.jpg',
    },
    {
      name: 'BEAT #2',
      bpm: 145,
      key: 'A Minor',
      wav: '../../../assets/beats/alive 152bpm.wav',
      art: '../../../assets/albumArt/art22.jpg',
    },
    {
      name: 'BEAT #3',
      bpm: 200,
      key: 'A Minor',
      wav: '../../../assets/beats/bailar2themoon 200bpm.wav',
      art: '../../../assets/albumArt/finn-nJupV3AOP-U-unsplash.jpg',
    },
    {
      name: 'BEAT #4',
      bpm: 178,
      key: 'Eb Major',
      wav: '../../../assets/beats/bulletpoint 178bpm Eb major TAGGED.wav',
      art: '../../../assets/albumArt/noah-silliman-gzhyKEo_cbU-unsplash.jpg',
    },
    {
      name: 'BEAT #5',
      bpm: 162,
      key: 'A Minor',
      wav: '../../../assets/beats/core ekt 162bpm.wav',
      art: '../../../assets/albumArt/priscilla-du-preez-MU93ZoQPNB8-unsplash.jpg',
    },
    {
      name: 'BEAT #6',
      bpm: 162,
      key: 'A Minor',
      wav: '../../../assets/beats/depression2 162bpm.wav',
      art: '../../../assets/albumArt/stefano-pollio-ZC0EbdLC8G0-unsplash.jpg',
    },
    {
      name: 'BEAT #7',
      bpm: 145,
      key: 'A Minor',
      wav: '../../../assets/beats/end it all 145bpm.wav',
      art: '../../../assets/albumArt/stormseeker-rX12B5uX7QM-unsplash.jpg',
    },
    {
      name: 'BEAT #8',
      bpm: 120,
      key: 'A Minor',
      wav: '../../../assets/beats/end of the world 120bpm.wav',
      art: '../../../assets/albumArt/terry-vlisidis-WsEbnsnKbUE-unsplash.jpg',
    },
    {
      name: 'BEAT #9',
      bpm: 135,
      key: 'F Minor',
      wav: '../../../assets/beats/forever 135bpm Fminor.wav',
      art: '../../../assets/albumArt/adrien-olichon-RCAhiGJsUUE-unsplash.jpg',
    },
    {
      name: 'BEAT #10',
      bpm: 162,
      key: 'A Minor',
      wav: '../../../assets/beats/hisNameWas 162bpm.wav',
      art: '../../../assets/albumArt/billy-huynh-W8KTS-mhFUE-unsplash.jpg',
    },
    {
      name: 'BEAT #11',
      bpm: 147,
      key: 'A Minor',
      wav: '../../../assets/beats/hypeboi 147bpm.wav',
      art: '../../../assets/albumArt/jeremy-bishop-rqWoB4LFgmc-unsplash.jpg',
    },
    {
      name: 'BEAT #12',
      bpm: 162,
      key: 'G Major',
      wav: '../../../assets/beats/juLyingHo 162bpm Gmajor.wav',
      art: '../../../assets/albumArt/jeremy-bishop-G9i_plbfDgk-unsplash.jpg',
    },
    {
      name: 'BEAT #13',
      bpm: 180,
      key: 'G Major',
      wav: '../../../assets/beats/popFool 180bpm.wav',
      art: '../../../assets/albumArt/m-wrona-pCgxm-HDMNs-unsplash.jpg',
    },
    {
      name: 'BEAT #14',
      bpm: 111,
      key: 'G Major',
      wav: '../../../assets/beats/run with it 111bpm.wav',
      art: '../../../assets/albumArt/mathew-macquarrie-u6OnpbMuZAs-unsplash.jpg',
    },
  ];

  ngOnInit(): void {
    // make call here to GET all songs from service file?
    // perhaps....
  }
}
