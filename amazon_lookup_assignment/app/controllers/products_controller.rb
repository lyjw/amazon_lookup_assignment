require 'open-uri'
# require 'net/http'

class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def new
  end

  def search
    product_url = params[:product_url]
    product_details = open(product_url).read
    page = Nokogiri::HTML(product_details)

    @product = Product.new
    @product.name = page.css("span#productTitle").text

    if @product.save
      redirect_to products_path, notice: "Product (#{@product.name}) was added."
    else
      flash[:alert] = "Product was not added."
      render :new
    end
  end
end
