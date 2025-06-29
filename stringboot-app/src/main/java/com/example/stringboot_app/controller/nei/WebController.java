package com.example.stringboot_app.controller.nei;

import com.example.stringboot_app.entity.nei.User;
import com.example.stringboot_app.service.nei.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class WebController {
    
    @Autowired
    private UserService userService;
    
    // トップページ（ユーザー一覧）
    @GetMapping("/webuser")
    public String index(Model model) {
        model.addAttribute("users", userService.getAllUsers());
        return "nei/index";
    }

    
    // 新規ユーザー登録フォーム表示
    @GetMapping("/users/new")
    public String newUserForm(Model model) {
        model.addAttribute("user", new User());
        return "nei/user-form";
    }
    
    // ユーザー保存
    @PostMapping("/users")
    public String saveUser(@ModelAttribute User user, RedirectAttributes redirectAttributes) {
        try {
            userService.saveUser(user);
            redirectAttributes.addFlashAttribute("message", "ユーザーを登録しました：" + user.getName());
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("error", "登録に失敗しました：" + e.getMessage());
        }
        return "redirect:/webuser";
    }
    
    // ユーザー編集フォーム表示
    @GetMapping("/users/{id}/edit")
    public String editUserForm(@PathVariable Long id, Model model) {
        User user = userService.getUserById(id).orElse(new User());
        model.addAttribute("user", user);
        return "nei/user-form";
    }
    
    // ユーザー削除
    @PostMapping("/users/{id}/delete")
    public String deleteUser(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        try {
            User user = userService.getUserById(id).orElse(null);
            if (user != null) {
                userService.deleteUser(id);
                redirectAttributes.addFlashAttribute("message", "ユーザーを削除しました：" + user.getName());
            } else {
                redirectAttributes.addFlashAttribute("error", "ユーザーが見つかりません");
            }
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("error", "削除に失敗しました：" + e.getMessage());
        }
        return "redirect:/webuser";
    }
    
    // 検索機能
    @GetMapping("/users/search")
    public String searchUsers(@RequestParam String name, Model model) {
        model.addAttribute("users", userService.searchByName(name));
        model.addAttribute("searchKeyword", name);
        return "nei/index";
    }
}