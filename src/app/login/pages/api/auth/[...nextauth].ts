import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Initialize NextAuth

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "837317030619-2tdobqres52el7e5cujd8dnhjgl468tl.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
})