import React from "react";
import {makeObservable, makeAutoObservable, observable, action} from "mobx";

export default class ObservableStore {
    id = Math.random();
    title = "";
    finished = false;
    cities = [];

    constructor(title) {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action
        });

        this.title = title;
    }

    toggle() {
        this.finished = !this.finished;
    }
}
