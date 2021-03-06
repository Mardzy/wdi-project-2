const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Artist = require('../models/artist');
const Photo = require('../models/photo');
const Type = require('../models/type');
const Term = require('../models/term');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

Artist.collection.drop();
Photo.collection.drop();
Term.collection.drop();
Type.collection.drop();

Artist.create([{
  name: 'Shok-1',
  description: 'British artist SHOK-1 spraypaints unique X-ray art on walls around the world. The works present a  diagnosis of life in the 21st century, sometimes in glowing health and other times pathological. A cool blend of street and science, the paintings are enormously popular. Darkly beautiful and packed with subtle layers of delicate detail, X-rays are one of the most difficult subject matters a painter could attempt. SHOK-1 has pioneered cutting-edge freehand techniques, no tape or stencils are used to render the intricate translucent effects.He was one of the first Europeans to co-opt the street cultures that exploded from the USA in the early 80\'s, laying down the foundations for what has become one of the most important art movements worldwide. He has continued to reinvent his work and take risks throughout a career currently spanning over 30 years. SHOK-1 is based in London and holds a degree in Applied Chemistry.',
  styles: 'Aerosol X-Ray',
  image: '/assets/images/square/shok-1-hips-min.jpg',
  caption: '3D Hand'
}, {
  name: 'Faith 47',
  description: 'Faith47 (born Cape Town, 1979) is a South African artist. She began painting in 1997, three years after the end of apartheid. Using a wide range of media, her approach is explorative and substrate appropriate – from found and rescued objects, to time-layered and history-textured city walls, to studio-prepared canvas and wood. A self-taught artist, Faith47 is widely regarded as one of the most famous South African street artists, although her art has reached international fame. Faith47 is also one of the most famous female street and graffiti artists in the world.',
  styles: 'Textured Imaging',
  image: '/assets/images/square/faith47-sq-min.jpg',
  caption: 'Blindfolded Woman'
}, {
  name: 'Vhils',
  description: 'Alexandre Farto was born in Portugal in 1987. He studied at the Byam Shaw School of Art in London, and now lives and works in London and Lisbon. He gained prominence when his work of a face carved into a wall appeared alongside a picture by street artist Banksy at the Cans Festival in London in 2008. A photograph of him creating the work appeared on the front page of The Times.',
  styles: 'Reverse Graffiti',
  image: '/assets/images/square/vhils-sh-min.jpg',
  caption: 'Man\'s Face'
}, {
  name: 'Banksy',
  description: 'Banksy is an England-based graffiti artist, political activist, and film director of unverified identity. Their satirical street art and subversive epigrams combine dark humour with graffiti executed in a distinctive stenciling technique. Banksy\'s works of political and social commentary have been featured on streets, walls, and bridges of cities throughout the world. Banksy\'s work grew out of the Bristol underground scene, which involved collaborations between artists and musicians.',
  styles: 'Distinctive Stenciling',
  image: '/assets/images/square/banksy-kid-crying-min.jpg',
  caption: 'Crying Child'
}, {
  name: 'Gregos',
  description: 'Gregos, grew up in the northern suburbs of Paris, where he was born in 1972. Self-taught, his first steps in street art were in graffiti painting during the late 80s and, early 90s. He invented his own 3D concept, and creates a replicate of his own face, with different emotions. More than 1000 faces have been installed, in Paris, and many places all over the world.',
  styles: 'Moulding & Sculpting',
  image: '/assets/images/square/gregos-rainbow-min.jpg',
  caption: 'Tongue-out Mask'
}, {
  name: 'WRDSMTH',
  description: 'WRDSMTH is a Los Angeles-based street artist of unverified identity known for his iconic image of a vintage typewriter with different sheets of inspirational text. From 2001 to 2007, the artist behind WRDSMTH was living in Chicago working in advertising. He moved to Los Angeles to pursue writing and became a published author in 2012.',
  styles: 'Stencil & Wheat Paste Poster',
  image: '/assets/images/square/wrdsmth-dream.jpg',
  caption: 'Typewriter'
}])
  .then(artists => {

    console.log(`${artists.length} artists created`);

    return Type.create([{
      image: '/assets/images/shok-1-rainbow-min.jpg',
      type: '3D Aerosol'
    }, {
      image: '/assets/images/gregos-stripes.jpg',
      type: 'Installation'
    }, {
      image: '/assets/images/banksy-dreams-min.jpg',
      type: 'Stencil'
    }, {
      image: '/assets/images/vhils-min.jpg',
      type: 'Reverse graffiti'
    }, {
      image: '/assets/images/faith47-min.jpg',
      type: 'Textured Image'
    }, {
      image: '/assets/images/wrdsmth-min.jpg',
      type: 'Wheatpaste'
    }])
      .then(types => {

        console.log(`${types.length} types created`);

        return Term.create([{
          headline: 'Tag',
          description: 'Tag is the most basic and the most prevalent form of graffiti. It is usually written with marker or spray paint and in one color, which is sharply contrasted with its background. Tag is a stylized personal signature and contains graffiti writer’s name, also known as a moniker. Graffiti writers often tag their pieces, following the practice of traditional artists who sign their artwork. Since the beginning of tagging in the mid twentieth century, individual graffiti scenes have developed very different forms of tagging that are unique to specific regions. The word ‘tag’ is also very widely used as a verb meaning ‘to sign’, even in other, non-graffiti related types of occasions.'
        }, {
          headline: 'Piece',
          description: 'The graffiti term ‘piece’, short of masterpiece, is used to describe a large, complex, time-consuming and labor-intensive graffiti painting, usually painted by skilled and experienced writers. It is generally agreed that a painting must have at least three colors to be considered a piece, but ‘pieces’ often incorporate color transitions, shadows and three-dimensional effects. The word ‘piece’ is also used as a verb meaning ‘to write’. Featured photograph is of a wonderful RISK piece he painted in Sheffield, UK, which sadly does not exist anymore as the disused building it was painted on was demolished to make place for a new housing project.'
        }, {
          headline: 'Heaven Spot',
          description: '’Heaven spot’, or ‘heaven’ in short, is a graffiti term which refers to dare devil graffiti pieces that are painted in places that are hard to reach, such as rooftops, overpasses and freeway signs, thus making them hard to remove. Heaven spot pieces often pose dangerous challenges for graffiti writers to execute, but because of that, they increase an artist’s notoriety. The term ‘heaven spot’ also encompasses a double meaning, as writing on dangerous locations may lead to accidents and result in artist’s death, thus going to heaven, or ‘hitting up the heavens’.'
        }, {
          headline: 'Buffed',
          description: 'State-hired painters and property owners use buffing to cover up graffiti and street art. These "buff jobs" are often eyesores that leave large, irregular patches of paint over street art and graffiti pieces.'
        }, {
          headline: 'King or Queen',
          description: '‘King’ (or ‘Queen’ for female writers) is a graffiti writer who is especially respected among other writers. Some people refer to different writers as kings of different graffiti styles, and the term is regionally subjective. Self-declared kings often incorporate crowns into their pieces but other writers tend to slash them out if they have not gained that rank in their eyes. Typically a writer can only become a king if another king has called him a king. Featured photograph is of a graffiti painted by Team Robbo on the piece of the London wall, which was the battle ground in a graffiti war waged between King Robbo and Banksy.'
        }, {
          headline: 'Angel',
          description: 'Graffiti term ‘angel’ is most commonly used when referring to a famous or highly respected graffiti artist who has passed away. Graffiti writers who admire ‘angels’ tag their names with floating halos, make tribute pieces with their faces or write tags with the dates of their birth and death. Featured is the photograph of Banksy’s ‘angel’, a tribute mural he did in the memory of graffiti writer Ozone who was tragically killed by a moving train. It was painted on the same wall on which Banksy and Ozone had a small artistic dispute when Ozone painted over one of Banksy’s pieces.'
        }])
          .then(terms => {

            console.log(`${terms.length} terms created`);

            return Photo.create([{
              artist: 'Unknown',
              location: 'Shoreditch',
              image: '/assets/images/square/hanging-min.jpg',
              caption: 'left me hanging',
              comments: []
            }, {
              artist: 'Jimmy C',
              location: 'Brixton',
              image: '/assets/images/square/david-bowie-min.jpg',
              caption: 'David Bowie',
              comments: []
            }, {
              artist: 'Ricky Dep',
              location: 'Shoreditch',
              image: '/assets/images/square/ricky-d-min.jpg',
              caption: 'Indian Cartoon Man',
              comments: []
            }, {
              artist: 'Unknown',
              location: 'Reykjavik',
              image: '/assets/images/square/reykjavik-min.jpg',
              caption: 'Lovers on Barn',
              comments: []
            }, {
              artist: 'Wuskerski',
              location: 'Shoreditch',
              image: '/assets/images/square/oink-wusk-min.jpg',
              caption: 'horn snout cartoon',
              comments: []
            }, {
              artist: 'Wuskerski',
              location: 'Shoreditch',
              image: '/assets/images/square/gr-pur-wusk-min.jpg',
              caption: 'Green and purple bear',
              comments: []
            }, {
              artist: 'Wuskerski',
              location: 'Shoreditch',
              image: '/assets/images/square/bloody-nose-wusk-min.jpg',
              caption: 'woman bloody nose',
              comments: []
            }, {
              artist: 'Unknown',
              location: 'Shoreditch',
              image: '/assets/images/square/vulture-min.jpg',
              caption: 'Woman with vuture',
              comments: []
            }, {
              artist: 'Unknown',
              location: 'Shoreditch',
              image: '/assets/images/square/cat-in-cat-min.jpg',
              caption: 'cat inside cat',
              comments: []
            }, {
              artist: 'Unknown',
              location: 'Toronto',
              image: '/assets/images/square/toronto-min.jpg',
              caption: 'toronto street art',
              comments: []
            }, {
              artist: 'Jimmy C',
              location: 'London',
              image: '/assets/images/square/jimmy-c-min.jpg',
              caption: 'girl and tree',
              comments: []
            }, {
              artist: 'Unknown',
              location: 'Shoreditch',
              image: '/assets/images/square/old-man-min.jpg',
              caption: 'Old man\'s face',
              comments: []
            }, {
              artist: 'Unknown',
              location: 'Cape Town',
              image: '/assets/images/square/woodstock.jpg',
              caption: 'Devil\'s peak art',
              comments: []
            }, {
              artist: 'Lapiztola',
              location: 'Shoreditch',
              image: '/assets/images/square/pig-lapiztola-min.jpg',
              caption: 'Pig girl woman',
              comments: []
            }, {
              artist: 'Unknown',
              location: 'Kiev',
              image: '/assets/images/square/kiev-min.jpg',
              caption: 'street art photo',
              comments: []
            }, {
              artist: 'David DeBrito',
              location: 'Shoreditch',
              image: '/assets/images/square/deBrito-min.jpg',
              caption: 'street art photo',
              comments: []
            } , {
              artist: 'Multiple',
              location: 'Shoreditch',
              image: '/assets/images/square/links-min.jpg',
              caption: 'street art photo',
              comments: []
            } , {
              artist: 'Unknown',
              location: 'Shoreditch',
              image: '/assets/images/square/car-min.jpg',
              caption: 'street art photo',
              comments: []
            }, {
              artist: 'Unknown',
              location: 'Copenhagen',
              image: '/assets/images/square/copenhagen-min.jpg',
              caption: 'street art photo',
              comments: []
            }, {
              artist: 'Unkown',
              location: 'Berlin',
              image: '/assets/images/square/berlin-love-wall-min.jpg',
              caption: 'street art photo',
              comments: []
            }, {
              artist: 'Globalstre',
              location: 'Shoreditch',
              image: '/assets/images/square/asian-boy-min.jpg',
              caption: 'Asian Boy',
              comments: []
            }, {
              artist: 'Banksy',
              location: 'Shoreditch',
              image: '/assets/images/square/banksy-kid-crying-min.jpg',
              caption: 'Asian Boy',
              comments: []
            }, {
              artist: 'Invader',
              location: 'Shoreditch',
              image: '/assets/images/square/star-wars-min.jpg',
              caption: 'street art photo',
              comments: []
            }, {
              artist: 'Gregos',
              location: 'Shoreditch',
              image: '/assets/images/square/gregos-min.jpg',
              caption: 'Gregos face',
              comments: []
            }
            ]);

          });
      });
  })
  .then(photos => console.log(`${photos.length} photos created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
