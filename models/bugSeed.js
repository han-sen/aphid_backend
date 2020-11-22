const seedData = [
    {
        id: 1,
        title: "broken list",
        project: "dogify",
        severity: "breaking",
        blameFile: "unknown",
        summary: "can't render list of dogs",
        readOut: "Unexpected token '<' at start of file",
        status: "open",
        userId: "104525197841473040639",
    },
    {
        id: 2,
        title: "can't save form data",
        project: "papaya",
        severity: "breaking",
        blameFile: "signUpForm.js",
        summary: "form data is not coming in as expected",
        readOut: "reference error: taget is not defined",
        status: "open",
        userId: "104525197841473040639",
    },
    {
        id: 3,
        title: "wrong image order in slider",
        project: "juniper",
        severity: "minor",
        blameFile: "slider.js",
        summary: "slider starts from 2nd item in image array",
        readOut: "",
        status: "closed",
        userId: "104525197841473040639",
    },
    {
        id: 4,
        title: "can't access auth route after login",
        project: "momostly",
        severity: "moderate",
        blameFile: "app.js",
        summary: "unable to access gated route even with a valid json token",
        readOut: "403 - Unauthorized Access",
        status: "open",
        userId: "104525197841473040639",
    },
    {
        id: 5,
        title: "nested promises need cleanup",
        project: "shipit",
        severity: "moderate",
        blameFile: "shipmentController.js",
        summary: "ESLint is complaining about nested promises",
        readOut: "moderate: Avoid Nesting Promises",
        status: "closed",
        userId: "104525197841473040639",
    },
    {
        id: 6,
        title: "duplicate entries",
        project: "papaya",
        severity: "minor",
        blameFile: "signUpForm.js",
        summary: "form data is not coming in as expected",
        readOut: "reference error: taget is not defined",
        status: "open",
        userId: "104525197841473040639",
    },
    {
        id: 7,
        title: "not getting expected props",
        project: "juniper",
        severity: "breaking",
        blameFile: "userModule.js",
        summary:
            "user profile area is not recieving its prop data in proper format",
        readOut: "can't access [0] index of undefined",
        status: "open",
        userId: "104525197841473040639",
    },
    {
        id: 8,
        title: "coin prices using deprecated API",
        project: "coinster",
        severity: "moderate",
        blameFile: "getCoinPrices.js",
        summary:
            "the API endpoint we're using for realtime coin updates is scheduled to become deprecated",
        readOut: "",
        status: "open",
        userId: "104525197841473040639",
    },
    {
        id: 9,
        title: "not getting local tz for birthday notifcations",
        project: "momostly",
        severity: "minor",
        blameFile: "userConfig.js",
        summary:
            "users arent getting midnight birthday notifications in correct timezone",
        readOut: "",
        status: "open",
        userId: "104525197841473040639",
    },
    {
        id: 10,
        title: "unused import cleanup needed",
        project: "juniper",
        severity: "minor",
        blameFile: "treeFeed.js",
        summary:
            "multiple unused imports left over after refactoring store page",
        readOut: "PlantCost is defined but never used no-unused-vars",
        status: "open",
        userId: "104525197841473040639",
    },
    {
        id: 11,
        title: "infinite useEffect update",
        project: "papaya",
        severity: "breaking",
        blameFile: "updatedTracker.js",
        summary:
            "analytics dashboard page is broken because of an infinite update loop",
        readOut:
            "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate.",
        status: "open",
        userId: "104525197841473040639",
    },
];

module.exports = seedData;
