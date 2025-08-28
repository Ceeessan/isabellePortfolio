import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'gallery', component: GalleryComponent}
];
