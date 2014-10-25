// Тестируем наличие элементов
casper.test.begin('Page content tests', function suite(test) {
  casper
    .start('http://localhost:8000', function() {
      test.assertTitle('form validation', 'title is the one expected');
      test.assertExists('.form_flat', 'Form exist');
    })
    .run(function() {
      test.done();
    });
});
