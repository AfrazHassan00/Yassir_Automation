var CONSTANTS = {
  URL : "https://gocity.com/"

}

var CLASS_CSS = {
  BUY_BUTTON : "a[class='lc-font__regular']",
  PASSES_CLASS : "lc-products-list__item-wrapper",
  SELECT_BUTTON : "button[class='btn lc-products-list__item-select lc-font__regular']",
  CART_ICON : "div[class='cart-icon__icon']",
  CART_AMOUNT : "div[class ='lc-cart__item-amount-value']",
  CHECKOUT : "a[class='lc-cart__purchase lc-font__regular ']",
  CHECKOUT_PAGE_TITLE : "h1[class='content__title']",
  CHOOSING_DESTINATION : "div[class ='banner__cta']",
  BOSTON : "a[title='Boston']",
  EXPLORER_PAGE : "a[data-testid='menu-main-pass_product-exp']",
  EXPLORER_PAGE_CHECKOUT : "a[data-testid='sidecart-checkout-link']"
  
}

var EXPLORER_PAGE_LINKS = {
  HOW_IT_WORKS : "a[data-testid='menu-main-subpage-pass_product-how_it_works']",
  ATTRACTIONS : "a[data-testid='menu-main-subpage-pass_product-attractions']",
  RESERVATIONS : "a[data-testid='menu-main-subpage-pass_product-reservations']",
  DOWNLOAD_YOUR_GUIDE : "a[data-testid='menu-main-guidebook']"

}
module.exports = {
  CONSTANTS,
  CLASS_CSS,
  EXPLORER_PAGE_LINKS
}