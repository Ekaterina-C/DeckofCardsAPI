package com.deckofcardsapi.utilities;

public enum DeckOfCardsAPIResources {



    // Shuffle the Cards:
    shuffleCardsAPI("/api/deck/new/shuffle"),

    // Reshuffle the Cards:
    reshuffleCards("/api/deck/<<deck_id>>/shuffle/"),

    // Draw a Card:
    drawCard("/api/deck/"),

    // A Brand New Deck:
    createNewDeck("/api/deck/new/"),

    //Create new deck and draw card
    createNewDeckAndDrawCard("/api/deck/new/draw/");




    private String resource;

    DeckOfCardsAPIResources(String resource) {
        this.resource = resource;
    }

    public String getResource() {
        return resource;
    }
}
