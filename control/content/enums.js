'use strict';

(function (angular) {
  angular.module('couponPluginContent')
    .constant('TAG_NAMES', {
      COUPON_INFO: 'couponInfo',
      COUPON_CATEGORIES: 'couponCategories',
      COUPON_ITEMS: "couponItems"
    })
    .constant('STATUS_CODE', {
      INSERTED: 'inserted',
      UPDATED: 'updated',
      NOT_FOUND: 'NOTFOUND',
      UNDEFINED_DATA: 'UNDEFINED_DATA',
      UNDEFINED_OPTIONS: 'UNDEFINED_OPTIONS',
      UNDEFINED_ID: 'UNDEFINED_ID',
      ITEM_ARRAY_FOUND: 'ITEM_ARRAY_FOUND',
      NOT_ITEM_ARRAY: 'NOT_ITEM_ARRAY'
    })
    .constant('STATUS_MESSAGES', {
      UNDEFINED_DATA: 'Undefined data provided',
      UNDEFINED_OPTIONS: 'Undefined options provided',
      UNDEFINED_ID: 'Undefined id provided',
      NOT_ITEM_ARRAY: 'Array of Items not provided',
      ITEM_ARRAY_FOUND: 'Array of Items provided'
    })
    .constant('LAYOUTS', {
      itemListLayout: [
        {name: "List-Layout-1"},
        {name: "List-Layout-2"},
        {name: "List-Layout-3"},
        {name: "List-Layout-4"}
      ]
    })
    .constant('PAGINATION', {
      itemCount: 10
    })
    .constant('SORT', {
      MANUALLY: 'Manually',
      ITEM_TITLE_A_Z: 'Item title A-Z',
      ITEM_TITLE_Z_A: 'Item title Z-A',
      NEWEST_PUBLICATION_DATE: 'Newest publication date',
      OLDEST_PUBLICATION_DATE: 'Oldest publication date',
      NEWEST_FIRST: 'Newest entry first',
      OLDEST_FIRST: 'Oldest entry first',
      _limit: 10,
      _maxLimit: 19,
      _skip: 0
    })
      .constant('SORT_FILTER', {
        MANUALLY: 'Manually',
        CATEGORY_NAME_A_Z: 'Category Name A-Z',
        CATEGORY_NAME_Z_A: 'Category Name Z-A',
        _limit: 10,
        _maxLimit: 19,
        _skip: 0
      });
})(window.angular);