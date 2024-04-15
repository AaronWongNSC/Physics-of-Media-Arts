var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Physics for Creatives   copyright  "
},
{
  "id": "ch-scientific-method",
  "level": "1",
  "url": "ch-scientific-method.html",
  "type": "Chapter",
  "number": "1",
  "title": "The Scientific Method",
  "body": " The Scientific Method   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-measurement",
  "level": "1",
  "url": "ch-measurement.html",
  "type": "Chapter",
  "number": "2",
  "title": "Measurement",
  "body": " Measurement   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-mathematics",
  "level": "1",
  "url": "ch-mathematics.html",
  "type": "Chapter",
  "number": "3",
  "title": "Mathematics",
  "body": " Mathematics   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-one-dim",
  "level": "1",
  "url": "ch-one-dim.html",
  "type": "Chapter",
  "number": "4",
  "title": "One-Dimensional Motion",
  "body": " One-Dimensional Motion   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-constant-acceleration",
  "level": "1",
  "url": "ch-constant-acceleration.html",
  "type": "Chapter",
  "number": "5",
  "title": "Constant Acceleration Problems",
  "body": " Constant Acceleration Problems   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-newton",
  "level": "1",
  "url": "ch-newton.html",
  "type": "Chapter",
  "number": "6",
  "title": "Newton’s Laws of Motion",
  "body": " Newton's Laws of Motion   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-momentum",
  "level": "1",
  "url": "ch-momentum.html",
  "type": "Chapter",
  "number": "7",
  "title": "Momentum",
  "body": " Momentum   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-rigid-structures",
  "level": "1",
  "url": "ch-rigid-structures.html",
  "type": "Chapter",
  "number": "8",
  "title": "Rigid Structures",
  "body": " Rigid Structures   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-tension",
  "level": "1",
  "url": "ch-tension.html",
  "type": "Chapter",
  "number": "9",
  "title": "Tension",
  "body": " Tension   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-light",
  "level": "1",
  "url": "ch-light.html",
  "type": "Chapter",
  "number": "10",
  "title": "Introduction to Light",
  "body": " Introduction to Light   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-reflection-refraction",
  "level": "1",
  "url": "ch-reflection-refraction.html",
  "type": "Chapter",
  "number": "11",
  "title": "Reflection and Refraction",
  "body": " Reflection and Refraction   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-lenses",
  "level": "1",
  "url": "ch-lenses.html",
  "type": "Chapter",
  "number": "12",
  "title": "Lenses",
  "body": " Lenses   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-color-science",
  "level": "1",
  "url": "ch-color-science.html",
  "type": "Chapter",
  "number": "13",
  "title": "Color Science",
  "body": " Color Science   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-sound",
  "level": "1",
  "url": "ch-sound.html",
  "type": "Chapter",
  "number": "14",
  "title": "Introduction to Sound",
  "body": " Introduction to Sound   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-resonance",
  "level": "1",
  "url": "ch-resonance.html",
  "type": "Chapter",
  "number": "15",
  "title": "Resonance",
  "body": " Resonance   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-music",
  "level": "1",
  "url": "ch-music.html",
  "type": "Chapter",
  "number": "16",
  "title": "Music",
  "body": " Music   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-electronics",
  "level": "1",
  "url": "ch-electronics.html",
  "type": "Chapter",
  "number": "17",
  "title": "Basic Electronics",
  "body": " Basic Electronics   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-hacking",
  "level": "1",
  "url": "ch-hacking.html",
  "type": "Chapter",
  "number": "18",
  "title": "Hacking Electronics",
  "body": " Hacking Electronics   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-building",
  "level": "1",
  "url": "ch-building.html",
  "type": "Chapter",
  "number": "19",
  "title": "Building Electronics",
  "body": " Building Electronics   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
