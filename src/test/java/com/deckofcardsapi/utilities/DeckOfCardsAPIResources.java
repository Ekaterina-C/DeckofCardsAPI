package com.deckofcardsapi.utilities;

public enum DeckOfCardsAPIResources {

    shuffleCardsAPI("/api/deck/new/shuffle"),
    reshuffleCards("/api/deck/<<deck_id>>/shuffle/"),
    drawCard("/api/deck/draw"),
    createNewDeck("/api/deck/new/"),
    createNewDeckAndDrawCard("/api/deck/new/draw/");


//    Shuffle the Cards
//    https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
//
//    Draw a Card:
//    https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
//
//    replace <<deck_id>> with "new" to create a shuffled deck and draw cards from that deck in the same request.
    /*
    Reshuffle the Cards:
    https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/

    A Brand New Deck:
    https://deckofcardsapi.com/api/deck/new/

    NEW (Oct 2019): Add jokers_enabled=true as a GET or POST parameter to your request to include two Jokers in the deck.
     */


    private String resource;

    DeckOfCardsAPIResources(String resource) {
        this.resource = resource;
    }

    public String getResource() {
        return resource;
    }
}
