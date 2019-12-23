(ns susan-card.core
    (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn hello-world []
  [:div.page
   [:div
    [:div.family_photo]
    [:div.greeting]
    [:div.text.instructions [:b "To Github!!"] [:p "Merry Christmas!"] [:p "From Connie!"]]]])




(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)


