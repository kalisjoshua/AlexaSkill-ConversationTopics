'use strict';

/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills Kit.
 * The Intent Schema, Custom Slots, and Sample Utterances for this skill, as well as
 * testing instructions are located at http://amzn.to/1LzFrj6
 *
 * For additional samples, visit the Alexa Skills Kit Getting Started guide at
 * http://amzn.to/1LGWsLG
 */

/**
 * To prevent someone else from configuring a skill that uses your Lambda
 * function, populate `skillId` with your skill's application ID
 */
const skillId = '';

const topics = [
  'the holy roman empire was in no way holy, nor Roman, nor an empire',
  'what was a significant moment in your life',
  'where would you most like to visit',
  'what do you do to relieve stress',
  'what is the most useful thing you own',
  'who has been the most influential person on who you have become',
  'what is your superpower',
  'what is something on your bucket list',
  'what is a favorite story of yours: book, movie, other',
  'do you prefer traveling in a group or alone',
  'what is the longest you have sat and just let you mind wander; and if you remember, what did you think about',
  'if you could make one change to the world, what would it be; why, or what result would you hope for',
  'what personal goal do you have for yourself currently that you are working towards',
  'a portal opens in front of you, knowing that it is safe, but not where to, do you enter and why',
  'what moment in your life would you most like to relive with the knowledge you have now; and why',
  'when did a complete stranger do something nice for you',
  'would you rather be able to see 10 minutes into your own future or 10 minutes into the future of anyone but yourself',
  'would you rather go to jail for 4 years for something you did not do or get away with something horrible you did but always live in fear of being caught',
  'do you think that you would better fit in in a different place and time in history',
  'would you rather live in the wilderness, far from civilization, or live on the streets of a city as a homeless person',
  'what is your definition of greatness',
  'if you had to choose, would you rather be an inventor or an explorer',
  'would you rather receive one free international round-trip ticket per year, or unlimited round-trip tickets within one continent',
  'would you rather face your fears, or forget that you ever had them',
  'what was something that you did, knowing it was dangerous before doing it',
  'what movie genre would your life story best fit',
  'do you like to be saved, or do the saving',
  'what would you study if all of your monetary needs were covered by your efforts',
  'what would you tell your 15 year old self, if you could',
  'what was the best TV sitcom ever',
  'what makes you feel better if you are down',
  'how will our culture change in the next 100 years',
  'where would you most like to travel',
  'if you could appear on any game show which would you choose',
  'what have you lost that you’d most like to find',
  'do you tend to live in the past, present, or future',
  'what do you think is the ideal age',
  'what is the most beautiful place you’ve ever seen',
  'if you could spend the weekend in any city which would you choose',
  'what do you most admire about your parents',
  'if you needed to change your name what would you choose',
  'what is a simple pleasure you have or indulge in',
  'what was the best vacation you have ever been on',
  'if you could improve one characteristic of all humans what would you choose',
  'what is something you miss about childhood',
  'if you could receive a lesson from an expert who would that be and on what',
  'do you have any superstitions',
  'would you be likely to survive alone in the wilderness',
  'would you ever skydive or swim with sharks; what if you could be sure that you could not be harmed',
  'if money were no object, what kind of party would you throw',
  'what is your dream job',
  'if you knew that you were going to inherit a fortune how would your plans for the future change',
  'what do you dream your life will be like in 10 years',
  'where would you choose to live if you had to leave this country',
  'which accomplishment are you most proud of',
  'if you could master one musical instrument, which would you choose',
  'which book has dramatically influenced your life',
  'which of your ancestors would you most like to meet',
  'would you like to be proudest of your accomplishments or your character',
  'what posters did you have in your room when you were young',
  'how many different places have you lived',
  'what do you wish you were better at saying "no" to',
  'what is the biggest lie you told as a child',
  'what is your favorite part of thanksgiving dinner',
  'what fear would you like to conquer',
  'what dangerous thing would you do if there was no risk just once',
  'would you rather live by the beach or in the mountains',
  'is it more essential to develop beliefs or gain knowledge',
  'what is the worst job you have ever had',
  'in your golden years would you rather have a sharp mind or fit body',
  'would you rather meet your great great grandparents or your great great grandchildren',
  'what is the funniest advice someone has given you',
  'which is more important, intelligence or common sense',
  'who is the most optimistic person you know',
  'what is a favorite quote of yours',
  'which event in the past, present, or future would you like to witness in person',
  'have you ever bought anything from a TV infomercial',
  'what is the strangest thing you have ever eaten',
  'when you were young what did you want to be when you grew up',
  'who would you most like to meet in person',
  'what do you complain about more than anything else',
  'what is your favorite desert',
  'what is the hardest thing you have ever done',
  'would you rather be the worst player on a winning team or the best player on a losing team',
  'which is more important to humanity, science or art',
  'are you tougher, mentally or physically',
  'which language would you like to speak fluently',
  'what are the most important qualities in friends',
  'what did you get into trouble for when you were young',
  'is justice or forgiveness more important',
  'would you rather visit a big city or the countryside',
  'do you let the little things get in the way of the big things',
  'do you possess any of the qualities of your astrological sign',
  'who do you think is the most inspirational person alive today',
  'if you didnt have to worry about money what would you do with your life',
  'who is the best teacher you have had or known',
  'what was your favorite game as a child',
  'which of your personality traits would you like to change',
  'what was your most memorable meal ever',
  'who is a personal hero of yours',
  'what do you worry about in the middle of the night',
  'when you want to laugh who do you turn to',
  'is it harder to forgive yourself or others',
  'which makes you happiest: home, religion, income, marriage, community, or something else',
  'what is the best stress reliever you know',
  'how much are you influenced by others happiness or unhappiness',
  'do your morals ever get in the way of things you want to do',
  'when is the last time you took a big risk',
  'how could you be happier than you are now',
  'what would you like to give up thinking about',
  'what is your favorite way to distract yourself',
  'when are you most impatient',
  'does work contribute to your happiness or take away from it',
  'why do we spend time doing things that we know wont make us happy',
  'do you have unnecessarily high standards',
  'are you ever surprised by your own behavior',
  'when you shuht your eyes at night what do you think about',
  'if you were going to begin dancing regularly what style would you choose',
  'do you think it is easier to be happy when you dont have as many choices',
  'what is contributing a surpriseing amount of happiness to your life recently',
  'what is the hardest thing for you to resist',
  'when have you been happiest in your life',
  'have you seen your work suffer when you are unhappy',
  'where is the most unlikely place you have made a friend',
  'what are things that energize you; what are things that exhaust you',
  'what are some small daily things that give you pleasure',
  'which kinds of decisions exhaust you',
  'what are you most greatful for recently',
  'how do you determine if an experience is positive or negative',
  'what is the biggest change you have made this year',
  'what is your favorite daydream',
  'what is the best way you have found to deal with criticism',
  'how do you unnecessarily spend money',
  'what do you sometimes take for granted',
  'what gets you out of bed in the morning',
  'are you willing to ask for help when you need it',
  'what was the most creative time of your life',
  'do you spend more energy seeking appreciation or giving it',
  'what is the most persuasive outside influence on your life',
  'have you ever felt guilty for being happy',
  'do you accept what cant be changed',
  'do you bring energy into a room or suck it out',
  'which possession did you thinkn would make you happier than it actually did',
  'when do you get your best ideas',
  'what are your top three strengths',
  'do you find it difficult to moderate your emotions',
  'is the richest person you know significantly happier than you',
  'are you an open book',
  'what life event that you thought was going to be negative turned out to be positive',
  'which purchas egave you the worst case of buyers remorse',
  'if you could get rid of a daily noise from something what would it be',
  'do you have higher standards for yourself or other people',
  'are you letting any of your talents go to waste',
  'what are three important characteristics you look for in a partner',
];

// --------------- Helpers that build all of the responses -----------------------

function speechletResponse(title, output, repromptText, shouldEndSession) {

  return {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: output,
      },
      card: {
        type: 'Simple',
        title: title,
        content: output,
      },
      reprompt: {
        outputSpeech: {
          type: 'PlainText',
          text: repromptText,
        },
      },
      shouldEndSession,
    },
  };
}

// --------------- Main handler -----------------------

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
function mainHandler(event, _, callback) {
  const applicationId = event.session.application.applicationId;

  console.log(JSON.stringify({
    applicationId,
    requestId: event.session.requestId,
    sessionId: event.session.sessionId,
    type: event.request.type,
  }));

  try {
    if (skillId && applicationId !== `amzn1.echo-sdk-ams.app.${skillId}`) {
       callback('Invalid Application ID');
    }

    if (/^(?:Launch|Intent)Request$/.test(event.request.type)) {
      const topic = topics[~~(Math.random() * (topics.length - 1))];
      const speechOutput = `Your conversation topic is, "${topic}".`;
      // If the user either does not reply to the welcome message or says
      // something that is not understood, they will be prompted again
      const repromptText = 'Sorry, I did not understand. Please try again.';

      callback(null, speechletResponse('Welcome', speechOutput, repromptText));
    } else if (event.request.type === 'SessionEndedRequest') {
      callback(null, speechletResponse('Session Ended', 'Enjoy.', null, true));
    }
  } catch (err) {
    callback(err);
  }
}

exports.handler = mainHandler;
