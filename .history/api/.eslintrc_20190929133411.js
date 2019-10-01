module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "rules": {
        "indent": [
            2,
            4,
            {
                "SwitchCase": 1,
                "VariableDeclarator": 1,
                "outerIIFEBody": 1
            }
        ],
    }
};
