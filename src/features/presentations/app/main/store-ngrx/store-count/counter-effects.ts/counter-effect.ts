import { Actions, createEffect, ofType } from "@ngrx/effects";
import {  INCREMENT, IncrementAction } from "../action-count/increment-action";
import { Action } from "@ngrx/store";
import { of, switchMap, tap } from "rxjs";
import { inject, Injectable } from "@angular/core";

