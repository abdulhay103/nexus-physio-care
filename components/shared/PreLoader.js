"use client";
import { daltechutility } from "@/utility";
import { useEffect } from "react";

const PreLoader = () => {
  useEffect(() => {
    daltechutility.preloader();
  }, []);

  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          <span data-text-preloader="A" className="letters-loading">
            A
          </span>
          <span data-text-preloader="E" className="letters-loading">
            E
          </span>
          <span data-text-preloader="R" className="letters-loading">
            R
          </span>
          <span data-text-preloader="O" className="letters-loading">
            O
          </span>
          <span data-text-preloader="D" className="letters-loading">
            D
          </span>
          <span data-text-preloader="E" className="letters-loading">
            E
          </span>
          <span data-text-preloader="V" className="letters-loading">
            V
          </span>
          <span data-text-preloader="S" className="letters-loading">
            S
          </span>
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreLoader;
