import { supabase } from "../config/supabaseClient.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Using Supabase Auth
  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (authError) {
      return res.status(400).json({ message: authError.message });
    }

    const userId = authData.user?.id;
    if (userId) {
      const { error: dbError } = await supabase
        .from("users")
        .insert([
          {
            id: userId,
            name: name,
            email: email,
            // learning_style and skill_level coming soon
          },
        ]);

      if (dbError) {
        console.error("Database insert error:", dbError);
        return res.status(400).json({ 
          message: "Failed to create user.",
          error: dbError
        });
      }
    }

    res.status(201).json({
      message: "User registered successfully",
      user: authData.user,
      session: authData.session,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      return res.status(400).json({ message: authError.message });
    }

    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    res.status(200).json({
      message: "Login successful",
      user: authData.user,
      profile: userData || null,
      session: authData.session,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
