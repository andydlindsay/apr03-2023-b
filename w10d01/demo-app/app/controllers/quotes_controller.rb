class QuotesController < ApplicationController
  def index
    character_id = params[:character_id]
    @character = Character.find(character_id)

    @quotes = @character.quotes
  end
end
