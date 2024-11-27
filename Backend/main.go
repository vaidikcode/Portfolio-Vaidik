package main

import (
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"log"
	"net/http"
)

func main() {
	r := mux.NewRouter()
	c := cors.New(cors.Options{AllowedOrigins: []string{"http://localhost:5173"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Authorization", "Content-Type"},
		ExposedHeaders:   []string{"Authorization", "Content-Type"},
		AllowCredentials: true,
		MaxAge:           86400})
	handler := c.Handler(r)
	r.HandleFunc("/getMessage", getMessage).Methods("POST")
	err := http.ListenAndServe(":8080", handler)
	if err != nil {
		log.Fatal(err)
	}
}

func getMessage(writer http.ResponseWriter, request *http.Request) {

}
