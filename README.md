# Worded

Worded is a very basic API for [Princeton University's WordNet
dictionary](http://wordnet.princeton.edu).

`GET` the definition of a given word with `/?word=[word]`:

```json
{
  "status":200,
  "definitions": [{
    "glossary": "a strong positive emotion of regard and affection; \"his love for his work\"; \"children need a lot of love\"","words":"love"},{"glossary":"have a great affection or liking for; \"I love French food\"; \"She loves her boss and works hard for him\"",
    "words": "love"
  }]
}
```
