import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ThemeService } from '../../../common/service/theme.service';
import { MediaKind } from '../../../common/enum/media_kind.enum';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swiper from 'swiper';
import { Meta, Title } from '@angular/platform-browser';

interface Ad {
  id: string;
  title: string;
  description?: string;
  kind: string;
  image: string;
}

interface Item {
  id: string;
  name: string;
  kind: string;
  image: string;
}

enum ItemKind {
  Media = 'MEDIA',
  Author = 'AUTHOR',
  User = 'USER'
}

const Ads: Array<Ad> = [
  {
    id: 'CvI3g7chm3M6mOovo3gYZ',
    title: 'The Cold War',
    description: 'Dive into the space race.',
    kind: MediaKind.Video,
    image: 'https://images.unsplash.com/photo-1457979406492-d1e6b97f3f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 'YZm8ggeY3G77J6rJXGSsL',
    title: 'Learn Astrophysics',
    description: 'Check out the top authors.',
    kind: MediaKind.Book,
    image: 'https://images.unsplash.com/photo-1579532040113-c94c4a38a1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=516&q=80'
  },
  {
    id: 'OEtmQCPHvLa4GmVM7JAQZ',
    title: 'Renaissance 101',
    description: 'DaVinci, Michelangelo and more.',
    kind: MediaKind.Podcast,
    image: 'https://images.unsplash.com/photo-1560579210-69248380602a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
  }
];

const Items: Array<Item> = [
  {
    id: 'GusZWL9VVbx1pVpepx4Cy',
    name: 'Jules Schrödinger',
    kind: ItemKind.Author,
    image: 'https://media.nature.com/lw800/magazine-assets/d41586-018-06034-8/d41586-018-06034-8_16060838.jpg'
  },
  {
    id: '0KYRKx7WWHxQHW6mbBkEZ',
    name: 'Cosmology for dummies',
    kind: ItemKind.Media,
    image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80'
  }
];

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, AfterViewInit, OnDestroy {
  // Observers
  private subject: Subject<void> = new Subject();

  // Data
  public ads = Ads;
  public recentItems = Items;

  // UI
  private adSwiper: Swiper;
  @ViewChild('adSwiper')
  private adSwiperRef: ElementRef;

  private recentSwiper: Swiper;
  @ViewChild('recentSwiper')
  private recentSwiperRef: ElementRef;

  constructor(private themeService: ThemeService, private metaService: Meta, private titleService: Title) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.adSwiper = new Swiper(this.adSwiperRef.nativeElement, {
      // cssMode: true,
      observer: true,
      slidesPerView: 'auto',
      // SET FREE MODE IF YOU WANT TO MOVE SWIPER IG STORIE'S LIKE
      freeMode: false,
      preloadImages: false,
      watchSlidesVisibility: false,
      spaceBetween: 16,
      autoplay: true,
      // mousewheel: true,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3,
        elementClass: 'swiper-lazy',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      }
    });

    this.recentSwiper = new Swiper(this.recentSwiperRef.nativeElement, {
      // cssMode: true,
      observer: true,
      slidesPerView: 'auto',
      // SET FREE MODE IF YOU WANT TO MOVE SWIPER IG STORIE'S LIKE
      freeMode: true,
      preloadImages: false,
      watchSlidesVisibility: false,
      spaceBetween: 4,
      // mousewheel: true,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3,
        elementClass: 'swiper-lazy',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      }
    });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  onClick(): void {
    this.themeService.toggle().pipe(takeUntil(this.subject)).subscribe((theme: string) => {
    });
  }
}
