var CONSTANTS = {
  URL : "https://gocity.com/"

}

var CLASS_CSS = {
  HOME_BUTTON : "a[title='Home']",
  HOME_LOGO : ".logo > img",
  BUY_BUTTON : "a[class='lc-font__regular']",
  BUY_NOW_BUTTON : "a[href='/boston/en-us/products/all-inclusive/pricing'",
  PASSES_PARENT_CLASS : ".lc-products-list__item-wrapper",
  PASSES_CHILD_CLASS : ".lc-products-list__item-name",
  CART_ICON : "div[class='cart-icon__icon']",
  CART_AMOUNT : "div[class ='lc-cart__item-amount-value']",
  CHECKOUT : "a[data-testid='sidecart-checkout-link']",
  CHECKOUT_PAGE_TITLE : "h1[class='content__title']",
  CHOOSING_DESTINATION : "div[class ='banner__cta']",
  EXPLORER_PAGE : "a[data-testid='menu-main-pass_product-exp']",
  ALL_INCLUSIVE_PAGE_TITLE : "a[data-testid=menu-main-pass_product-go]",
  EXPLORER_PAGE_CHECKOUT : "a[data-testid='sidecart-checkout-link']",
  EXPLORER_ALL_LINK : ".lpg-attractions-card__details",
  SELECT_DROP_DOWN_EXPLORER_PAGE : "select[class='form-control']",
  PLUS_SIGN : ":nth-child(3) > .lc-cart__item-amount-wrapper > .lc-cart__item-amount > [data-testid='cartItemIncrease']",
  ADULT_PRICE : ":nth-child(3) > .lc-cart__item-price > span > .formatted-price",
  ORDER_PRICE : ".lc-cart__prices-number > .formatted-price",
  CHECKOUT_PAGE_TITLE : ".content__title",
  DELETE_FROM_CART_ICON : ".lc-cart__item-delete",
  DELETE_FROM_CART_TEXT : "button[class ='lc-cart__item-delete']",
  
  CONFIRMATION_ALERT : ".custom-ui > :nth-child(2)"

  
}

module.exports = {
  CONSTANTS,
  CLASS_CSS
}