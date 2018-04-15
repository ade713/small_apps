class BooksController < ApplicationController
  def index
    @books = Book.all

    render :index
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      redirect_to books_url
    else
      render Bool.errors.full_messages, status: 422
    end
  end

  def destroy
    @book = Book.find_by(id: params[:id])

    if @book.delete
      redirect_to books_url
    else
      render Book.errors.full_messages, status: 422
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
