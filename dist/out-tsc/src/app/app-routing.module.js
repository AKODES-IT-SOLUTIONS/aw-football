import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'signin',
        loadChildren: () => import('./signin/signin.module').then((m) => m.SigninPageModule),
    },
    {
        path: 'signup',
        loadChildren: () => import('./signup/signup.module').then((m) => m.SignupPageModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () => import('./forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule),
    },
    {
        path: 'player2player',
        loadChildren: () => import('./player2player/player2player.module').then((m) => m.Player2playerPageModule),
        // canActivate: [AuthGuard],
    },
    {
        path: 'question2question',
        loadChildren: () => import('./question2question/question2question.module').then((m) => m.Question2questionPageModule),
        // canActivate: [AuthGuard],
    },
    {
        path: 'send-survey',
        loadChildren: () => import('./send-survey/send-survey.module').then((m) => m.SendSurveyPageModule),
        // canActivate: [AuthGuard],
    },
    {
        path: 'player-survey',
        loadChildren: () => import('./player-survey/player-survey.module').then((m) => m.PlayerSurveyPageModule),
        // canActivate: [AuthGuard],
    },
    {
        path: 'create-survey',
        loadChildren: () => import('./create-survey/create-survey.module').then((m) => m.CreateSurveyPageModule),
        // canActivate: [AuthGuard],
    },
    {
        path: 'home-coach',
        loadChildren: () => import('./home-coach/home-coach.module').then((m) => m.HomeCoachPageModule),
        // canActivate: [AuthGuard],
    },
    {
        path: 'your-team',
        loadChildren: () => import('./your-team/your-team.module').then((m) => m.YourTeamPageModule),
        // canActivate: [AuthGuard],
    },
    {
        path: 'view-answers',
        loadChildren: () => import('./view-answers/view-answers.module').then((m) => m.ViewAnswersPageModule),
        // canActivate: [AuthGuard],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        ],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map